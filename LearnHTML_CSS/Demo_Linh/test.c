#include <stdio.h>
#define MAX 1000
void NhapMang(int a[], int *n)
{
	int i;
	printf("Nhap mang: ");
	for (i = 0; i < *n; i++)
	{
		scanf("%d", &a[i]);
	}
}
void XuatMang(int a[], int n)
{
	int i;
	for (i = 0; i < n; i++)
	{
		printf("%d", a[i]);
	}
}
void ThemPhanTu(int a[], int *n, int x, int vt)
{
	if (vt >= 0 && vt <= *n)
	{
		int i;
		for (i = *n; i > vt; i--)
		{
			a[i] = a[i - 1]; // Dich phan tu sang phai 1 vi tri
			a[vt] = x;		 // Them x vao vi tri
			*n = *n + 1;	 // Tang so phan tu len 1
		}
	}
	else
		printf("\n Vi tri khong hop le");
}

int main()
{
	int x, n, vt, a[1000];
	printf("Nhap vi tri: ");
	scanf("%d", &vt);
	printf("Nhap bien x= ");
	scanf("%d", &x);

	do
	{

		printf("Nhap n = ");

		scanf("%d", &n);
	} while (n < 0);
	NhapMang(a, n);
	ThemPhanTu(a, n, x, vt);
	XuatMang(a, n);
}