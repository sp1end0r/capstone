## 어플리케이션 Beacon 연동용 테스트용 오픈소스

> ### - Conditions<br>
>
> 1) Output of Ethernet and IP headers <br>
> 2) Using while statement to write multiple times <br>
> 3) Read the part that contains the length of the IP header first, then cut the IP header part based on the value and parse it. <br>
> 4) The IP header option does not need to be considered. <br>
> 5) Write only when Ethernet Type is IPv4 <br>
