gcc rrclient.c -o rrclient.exe -Iinclude -Llib -lzmq
gcc rrworker.c -o rrworker.exe -Iinclude -Llib -lzmq
gcc rrbroker.c -o rrbroker.exe -Iinclude -Llib -lzmq
