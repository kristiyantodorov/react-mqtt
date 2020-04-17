bool isSquare(int n) {
    return heler(1, n)
}

bool helper(int i, int n) {
    if ( pow(i, 2) < n )
        return helper(i+1, n);
    if ( pow(i, 2) == n )
        return true;
    return false;
}