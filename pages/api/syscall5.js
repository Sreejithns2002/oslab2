export default function Syscall5(req, res) {
    res.status(200).json('#include <stdio. H> #include <string. H> #include <sys/types. H> #include <unistd. H> #include <stdlib. H> int main(int argc, char *argv[]) { pid_t pid; int cstatus; pid_t c; pid = fork(); if (pid == -1) printf("error in creating process\n"); else if (pid == 0) { printf("executing in child process\n"); execvp(argv[1], &argv[1]); perror("exec failure\n"); exit(1); } else { printf("executing in parent process\n"); c = wait(&cstatus); printf("parent: child %ld exited with status= %d\n", (long)c, cstatus); } }')
  }  