class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj = {}
        for idx, number in enumerate(nums):
            if number in obj:
                return [obj[number], idx]
            else:
                remaining = target - number
                obj[remaining] = idx        