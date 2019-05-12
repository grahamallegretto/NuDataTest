SIZE_OF_FILE=100000

# Generate Random Data
[ -e file ] && rm file
for i in $( eval echo {0..$SIZE_OF_FILE} ); do echo $(($RANDOM<<15|$RANDOM)) >> randomData.txt; done

# Run numsort on it
bash numsort.sh randomData.txt

# Check that it's sorted
sort --parallel=2 -nc sortedData.txt
echo "Sorting completed successfully!"
