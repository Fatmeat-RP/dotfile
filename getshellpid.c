#include <stdio.h>
#include <unistd.h>

int     main(void)
{
        printf("SHELL PID : %d\n", getppid());
        return (0);
}
