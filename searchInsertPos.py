class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        front = 0
        back = len(nums) - 1
        if(front == back):
            if(nums[0] < target):
                return 1
            else:
                return 0
        while(front < back):
            if(nums[back] - target < 0):
                return back + 1
            elif(target - nums[front] <= 0):
                return front
            elif(nums[front] == target):
                return front
            elif(nums[back] == target):
                return back
            elif(target - nums[front] <= nums[back] - target):
                front = front + 1
            else:
                back = back - 1
        return front