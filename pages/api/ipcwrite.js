export default function Ipcwrite(req, res) {
    res.status(200).json('#include <sys/ipc. H> #include <sys/shm. H> #include <stdio. H> int main() { printf(" ipc writer\n"); printf(" ============\n"); key_t key = ftok("shmfile", 65); int shmid = shmget(key, 1024, 0666 | ipc_creat); char *str = (char *)shmat(shmid, (void *)0, 0); printf("write data : "); scanf("%s", str); printf("data written in memory: %s\n", str); shmdt(str); return 0; }')
  }  