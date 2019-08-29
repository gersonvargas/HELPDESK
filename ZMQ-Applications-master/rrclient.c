// rrclient.c
// Hello World client
// Connects REQ socket to tcp://localhost:5559
// Sends "Hello" to server, expects "World" back
//
#include "zhelpers.h"

int main(void)
{

    void *context = zmq_ctx_new();

    //  Socket to talk to server
    void *requester = zmq_socket(context, ZMQ_REQ);
    zmq_connect(requester, "tcp://localhost:5559");
    int request_nbr;

    srandom((unsigned)time(NULL));
    for (request_nbr = 0; request_nbr != 10; request_nbr++)
    {

        //  Get values that will fool the boss
        int numero = randof(20);

        char update[20];
        sprintf(update, "%d", numero);
        printf("Send %s\n", update);
        s_send(requester, update);

        
        char *string = s_recv(requester);
        printf("Received reply %d [%s]\n", request_nbr, string);
        free(string);
    }
    zmq_close(requester);
    zmq_ctx_destroy(context);
    return 0;
}