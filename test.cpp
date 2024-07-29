#include <iostream>
using namespace std;
int main()
{
    
    int maxi=0;
    for(int i=0;i<N;i++){
        int sum=arr[i];
       for(int j=1;j<k;j++){
        sum+=arr[i+j];
       }
       maxi= max(maxi,sum);
    }
    return maxi;
}
