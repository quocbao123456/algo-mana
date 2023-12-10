
# def findLengthLongestSubstring(str1, str2):
#     def dp(index1, index2):
#         print(index1, index2)
#         if index1 == 0 or index2 == 0:
#             return 0
        
#         if str1[index1] == str2[index2]:
#             return 1 + dp(index1 - 1, index2 - 1)
        
#         return max(dp(index1 - 1, index2), dp(index1, index2 - 1))
        
#     return dp(len(str1) - 1, len(str2) - 1)


def findLengthLongestSubstring(str1, str2):
    
    dp = []
    for _ in range(len(str1)):
        list = []
        for _ in range(len(str2)):
            list.append(0)
        dp.append(list)
        
    for index1 in range(len(str1)):
        for index2 in range( len(str2)):
            if str1[index1] == str2[index2]:
                if index1 == 0 or index2 == 0:
                    dp[index1][index2] = 1
                else:
                    dp[index1][index2] = 1 + dp[index1 - 1][index2 - 1]
            else:
                dp[index1][index2] = max(dp[index1 - 1][index2], dp[index1][index2 - 1])
    
    print(dp)
    
    return dp[-1][-1]


print(findLengthLongestSubstring("www.google.com/explore5", "google.com/edpresso"))
# print(findLengthLongestSubstring("wwwgoogle", "google"))
