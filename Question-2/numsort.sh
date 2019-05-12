##
#	Sorts a file that contains only numeric entries. Must pass filename as a parameter.
#	Will output to 'sortedData.txt'
#

SIZE_OF_CHUNKS=10000

# Exit if file doesn't exist
if [ $# -eq 0 ] || [ ! -e $1 ]; then
	echo "File doesn't exist"
	exit 1
fi

# Split into smaller files
split -l $SIZE_OF_CHUNKS $1 chunk

# Sort the smaller files
for X in chunk*; do sort --parallel=2 -n $X > sorted-$X; done
rm chunk*

# Sort split files and merge
sort -nm --parallel=2 sorted-chunk* > sortedData.txt
rm sorted-chunk*
