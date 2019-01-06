/*
  Regular expression dynamic programming
  T[i][j] - i for text, j for pattern.
  
  if pattern[j] == '.' {
    T[i][j] if str[i]==pattern[j] || pattern[j] == '.'
  }
  if pattern[j] == "*" {
    T[i][j-2] for 0 occurence.
    T[i-1][j] if str[i] == pattern[j-1] || pattern[j-1]=='.'
  }

  false
*/