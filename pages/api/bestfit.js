export default function Bestfit(req, res) {
    res.status(200).json('#include <stdio. H> #define max 25 void main() { int frag[max], b[max], f[max], i, j, nb, nf, temp, lowest = 10000; static int bf[max], ff[max]; printf(" bestfit memory allocation\n"); printf(" ===========================\n"); printf("enter no. Of blocks: "); scanf("%d", &nb); printf("enter no. Of files: "); scanf("%d", &nf); printf("enter size of blocks\n"); for (i = 1; i <= nb; i++) { printf("block %d: ", i); scanf("%d", &b[i]); } printf("enter size of files\n"); for (i = 1; i <= nf; i++) { printf("file %d: ", i); scanf("%d", &f[i]); } for (i = 1; i <= nf; i++) { for (j = 1; j <= nb; j++) { if (bf[j] ! = 1) { temp = b[j] - f[i]; if (temp >= 0) if (lowest > temp) { ff[i] = j; lowest = temp; } } } frag[i] = lowest; bf[ff[i]] = 1; lowest = 10000; if (ff[i] == 0) printf("\nfile of size %d should wait\n", f[i]); } printf("\nfile no \tfile size \tblock no \tblock size \tfragment"); for (i = 1; i <= nf; i++) if (ff[i] ! = 0) printf("\n%d\t\t%d\t\t%d\t\t%d\t\t%d", i, f[i], ff[i], b[ff[i]], frag[i]); printf("\n"); }')
  }  