# Solves sorting problem from chapter 1, CRSV
# input: A sequence of n numbers (a1, a2, ...., an)
# Output: A permutation (reordering) (a'1, a'2, ....,a'n) of the input sequence
#   such that a'1<=a'2<=....a'n

# The following will be written in psuedocode

# INSERTION-SORT(A) psuedocode
A = [5, 2, 4, 6, 1, 3]
for j = 2 to A.length
  key = A[j]
  # insert A[j] into the sorted sequence A[1..j - 1]
  i = j - 1
  while i > 0 and A[i] > key
    A[i+1] = A[i]
    i = i - 1
  A[i+1] = key