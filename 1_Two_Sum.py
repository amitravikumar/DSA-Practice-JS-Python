# 1. Two Sum
#Implemented using Hashmap 

def two_sum(nums, target):
    hashMap = {} # {} is an empty dictionary(hashMap) in python
    
    for i, num in enumerate(nums):
        balanceValue = target - num
        
        if balanceValue in hashMap:
            return [hashMap[balanceValue], i]
            
        hashMap[num] = i
        
    return None
    
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(result)