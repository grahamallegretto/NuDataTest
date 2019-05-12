
const statusCode_e ={
	SUCCESS: 		'200',
	CLIENT_ERROR:	'400',
	SERVER_ERROR:	'500'
}
Object.freeze(statusCode_e)

class failingRequestMock_c
{
    constructor(numFailures) 
	{
		this.count = 0;
        this.passOnNum = numFailures + 1;
    }
	
	setNumFailures(numFailures)
	{
		this.count = 0;
		this.passOnNum = numFailures + 1;
	}
	
	request()
	{
		if (((++this.count) % this.passOnNum) == 0)
		{
			this.count = 0;
			console.log(statusCode_e.SUCCESS);
			return statusCode_e.SUCCESS; 
		}
		else
		{
			console.log(statusCode_e.SERVER_ERROR);
			return statusCode_e.SERVER_ERROR;
		}
	}
}	

function testPoint(result)
{
	if (result)
	{
		console.log('\tPASSED');
	}
	else
	{
		console.log('\tFAILED');
	}
}

function simpleRetry(requestObj) 
{
    var result = requestObj.request();
	if (result == statusCode_e.SERVER_ERROR)
	{
		result = requestObj.request();
	}	
	return result;
}

function backOffFunc(requestObj, enableJitter, max, delay) 
{
    console.log('max',max,'next delay',delay);
    var result = requestObj.request();
	var currentDelay = 0;
		
	if (result == statusCode_e.SERVER_ERROR)
	{
        if (max > 0) 
		{
			if (enableJitter)
			{
				currentDelay = Math.floor(delay*Math.random());
				console.log("Delaying " + currentDelay);
				setTimeout(function() {
					backOffFunc(requestObj, enableJitter, --max, delay * 2);}, currentDelay);				
			}
			else
			{
				setTimeout(function() {
					backOffFunc(requestObj, enableJitter, --max, delay * 2);}, delay);
			}
        } 
		else 
		{
            return result;   
        }
    }
	else
	{
		return result;
	}
}

failingRequestMock = new failingRequestMock_c(2);

// Simple Retry code
console.log('Simple retry test:');
testPoint(simpleRetry(failingRequestMock, function(result) {console.log('Success!');}) == statusCode_e.SERVER_ERROR);
failingRequestMock.setNumFailures(1);
testPoint(simpleRetry(failingRequestMock, function(result) {console.log('Success!');}) == statusCode_e.SUCCESS);

// Back off test
failingRequestJitterMock = new failingRequestMock_c(5);
console.log('\nJitter - will pass on the 5th try: ');
console.log(backOffFunc(failingRequestJitterMock, true,  10, 200));

