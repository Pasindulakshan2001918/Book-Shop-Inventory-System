   M S B A M L   `   `   `  ����  Book-Haven-Book-Shop!    BookShopInventory.Dashboard   5      W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5        N� Title$  Book-Haven - Dashboard��5      $	��803��6&   .��5      �  � RowDefinitions 5   
   �� 5	      $
��Auto �6   �� 5
      $��* �6   �� 5      $
��Auto �6   .+�5   
   �� $��0��6   ���#2E3A59$��3��67   $��
0,0,608,36q�6H   .+�5      �� -   5        $��	Dashboard��5      $	��200��6)   $��50��65   $��16(�6A   ���#2E3A59
����������#2E3A59$��2q�6�   $��Stretch=�6�   $
��0,10q�6�   6�   �� 5      -   5        $��Add Book��5      $	��200��6(   $��50��64   $��16(�6@   ���#2E3A59
����������#2E3A59$��2q�6�   $��Stretch=�6�   $
��0,10q�6�   6�   �� 5      -   5        $��	Edit Book��5      $	��200��6)   $��50��65   $��16(�6A   ���#2E3A59
����������#2E3A59$��2q�6�   $��Stretch=�6�   $
��0,10q�6�   6�   �� 5      -   5        $��Delete Book��5      $	��200��6+   $��50��67   $��16(�6C   ���#2E3A59
����������#2E3A59$��2q�6�   $��Stretch=�6�   $
��0,10q�6�   6�   �� 5      -   5        $��Log Out��5      $	��188��6'   $��50��63   $��16(�6?   
���  ��
�������
���  ��$��2q�6�   $��Stretch=�6�   $
��0,10q�6�   6�   5      � 5   
   $��1��6   ���#F4F4F4$��
195,0,0,36q�61   $��2��6E   .+�5      �� $��20q�6   .+�5      �  � ColumnDefinitions 5      �� 5      $��* �6+   �� 5      $��* �6+   �� 5      $��* �6+   .+�5#      �� ���#4CAF50 �� Padding$ 20q�62    �� CornerRadius$ 10��6?   $��10q�6Q   ._�5$      �� .+�5%      �� $��Total Books��6(   $��14(�6;   
�������6I   �� 5&      -   5         ��Name$ TotalBooksTextBlock��5&   (   $��22(�6E   $
��Bold"�6S   
�������6e   5'      5(      �� 5+      ���#FF9800$ 20q�62   $ 10��6?   $��10q�6Q   $��1��6]   ._�5,      �� .+�5-      �� $��Total Sales��6(   $��14(�6;   
�������6I   �� 5.      -   5        $ TotalSalesTextBlock��5.   (   $��22(�6E   $
��Bold"�6S   
�������6e   5/      50      �� 53      ���#2196F3$ 20q�62   $ 10��6?   $��10q�6Q   $��2��6]   ._�54      �� .+�55      �� $��Pending Orders��6(   $��14(�6>   
�������6L   �� 56      -   5        $ PendingOrdersTextBlock��56   (   $��22(�6H   $
��Bold"�6V   
�������6h   57      58      59      �� 5<      $��Recent Transactions��6   $��18(�67   $
��Bold"�6E   $��
10,20,0,10q�6W   �� 5=      -	   5         ��Name$  RecentTransactionsListView��5=      $	��150��6?    �� View 5>      �� 5?      .P�5@      �� $��
Book Title��6-    �� Width$	 200��6A   	 �� DisplayMemberBinding	 6M   �� *	BookTitle+�� 5A      $��Customer��6-   $	 150��6?   	 6K   �� *CustomerName+�� 5B      $
��Date��6-   $	 100��6;   	 6G   �� *Date+�� 5C      $��Amount��6-   $	 100��6=   	 6I   �� *Amount+5D      5F      �� 5I      $��Quick Actions��6   $��18(�61   $
��Bold"�6?   $��
10,20,0,10q�6Q   �� 5J      
 �� Orientation$
 
Horizontal=�6   $
��Left=�66   .+�5K      �� $��Add Book��6   $	��120��60   $��40��6<   ���#4CAF50
�������$��14(�6p   $��5q�6~   �� 5L      $��View Inventory��6   $	��120��66   $��40��6B   ���#2196F3
�������$��14(�6v   $��5q�6�   �� 5M      $��Manage Users��6   $	��120��64   $��40��6@   ���#FF9800
�������$��14(�6t   $��5q�6�   5N      �� 5Q      $��Search & Filter��6   $��18(�67   $
��Bold"�6E   $��
10,20,0,10q�6W   �� 5R      $
 
Horizontal=�6   .+�5S      �� -
   5         ��Name$ 	SearchBox��5S   A   $	��200��6   $��30��6*   $��5q�66   6A   �� 5T      $	��150��6   $��30��6+   $��5q�67   .@�5U      �� $��All Categories��6'   �� 5V      $��Fiction��6'   �� 5W      $��Non-fiction��6'   �� 5X      $��Comics��6'   5Y      �� 5Z      $��Search��6   $	��100��6.   $��30��6:   ���#2E3A59
�������$��14(�6n   $��5q�6|   5[      5\      5]      �� 5`   
   $��2��6   ���#2E3A59$ 10q�63   ._�5a      �� $.��(© 2025 Book-Haven. All Rights Reserved.��6   
�������$��12(�6Z   $��Center=�6h   5b      5c      5d      