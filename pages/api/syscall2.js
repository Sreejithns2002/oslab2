export default function Syscall2(req, res) {
    res.status(200).json('#include <stdio. H> #include <dirent. H> int main() { struct dirent *de; dir *dr = opendir(". "); if (dr == null) { printf("could not open current directory\n"); return 0; } while ((de = readdir(dr)) ! = null) printf("%s\n", de->d_name); closedir(dr); return 1; }')
  }  