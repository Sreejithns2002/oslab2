export default function Diskscan(req, res) {
    res.status(200).json('#include <stdio. H> #include <stdlib. H> int main() { int rq[100], i, j, n, totalheadmovt = 0, initial, size, move; printf(" scan disk scheduling\n"); printf(" ======================\n"); printf("enter the number of requests : "); scanf("%d", &n); printf("enter the request sequence\n"); for (i = 0; i < n; i++) scanf("%d", &rq[i]); printf("enter the initial head position : "); scanf("%d", &initial); printf("enter the total disk size : "); scanf("%d", &size); printf("enter the head movement direction (for high 1 and for low 0) : "); scanf("%d", &move); for (i = 0; i < n; i++) { for (j = 0; j < n - i - 1; j++) { if (rq[j] > rq[j + 1]) { int temp; temp = rq[j]; rq[j] = rq[j + 1]; rq[j + 1] = temp; } } } int index; for (i = 0; i < n; i++) { if (initial < rq[i]) { index = i; break; } } if (move == 1) { for (i = index; i < n; i++) { totalheadmovt = totalheadmovt + abs(rq[i] - initial); initial = rq[i]; } totalheadmovt = totalheadmovt + abs(rq[i - 1] - 1); initial = size - 1; for (i = index - 1; i >= 0; i--) { totalheadmovt = totalheadmovt + abs(rq[i] - initial); initial = rq[i]; } } else { for (i = index - 1; i >= 0; i--) { totalheadmovt = totalheadmovt + abs(rq[i] - initial); initial = rq[i]; } totalheadmovt = totalheadmovt + abs(rq[i + 1] - 0); initial = 0; for (i = index; i < n; i++) { totalheadmovt = totalheadmovt + abs(rq[i] - initial); initial = rq[i]; } } printf("total head movement is %d\n", totalheadmovt); return 0; }')
  }  