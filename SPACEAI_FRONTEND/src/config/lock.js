export const LOCK_ADDRESS = "0x500d3cB1a8709e06C6274CbFa952E4F2a13dd87d";

export const LOCK_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"to","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"to","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"_lpaddress","type":"address"},{"internalType":"address","name":"createruser","type":"address"}],"name":"CheckUserData","outputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"unlockOn","type":"uint256"},{"internalType":"uint256","name":"lockOn","type":"uint256"},{"internalType":"bool","name":"isVested","type":"bool"},{"internalType":"uint256","name":"vestingInterval","type":"uint256"},{"internalType":"uint256","name":"vestingPercent","type":"uint256"},{"internalType":"uint256","name":"actualBalance","type":"uint256"},{"internalType":"uint256","name":"balanceOf","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"},{"internalType":"uint256","name":"initialClaim","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"istoken","type":"bool"},{"internalType":"bool","name":"emergencyWithdraw","type":"bool"},{"internalType":"address","name":"Createduser","type":"address"}],"internalType":"struct LiquityLock.userInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"LpLocker","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpaddress","type":"address"},{"internalType":"bool","name":"_istoken","type":"bool"}],"name":"create","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpaddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_unlockOn","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"bool","name":"_isVested","type":"bool"},{"internalType":"uint256[]","name":"_vestingInfo","type":"uint256[]"},{"internalType":"bool","name":"_istoken","type":"bool"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lpaddress","type":"address"}],"name":"emergencyWithdrawUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpaddress","type":"address"}],"name":"getLockerId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getLockerInfo","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpaddress","type":"address"}],"name":"getLockerUsersInfo","outputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"unlockOn","type":"uint256"},{"internalType":"uint256","name":"lockOn","type":"uint256"},{"internalType":"bool","name":"isVested","type":"bool"},{"internalType":"uint256","name":"vestingInterval","type":"uint256"},{"internalType":"uint256","name":"vestingPercent","type":"uint256"},{"internalType":"uint256","name":"actualBalance","type":"uint256"},{"internalType":"uint256","name":"balanceOf","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"},{"internalType":"uint256","name":"initialClaim","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"istoken","type":"bool"},{"internalType":"bool","name":"emergencyWithdraw","type":"bool"},{"internalType":"address","name":"Createduser","type":"address"}],"internalType":"struct LiquityLock.userInfo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_useraddress","type":"address"}],"name":"getuserperlocker","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpaddress","type":"address"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"bool","name":"_access","type":"bool"}],"name":"grantEmergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"lockedInfoId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockedUsersInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"unlockOn","type":"uint256"},{"internalType":"uint256","name":"lockOn","type":"uint256"},{"internalType":"bool","name":"isVested","type":"bool"},{"internalType":"uint256","name":"vestingInterval","type":"uint256"},{"internalType":"uint256","name":"vestingPercent","type":"uint256"},{"internalType":"uint256","name":"actualBalance","type":"uint256"},{"internalType":"uint256","name":"balanceOf","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"},{"internalType":"uint256","name":"initialClaim","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"istoken","type":"bool"},{"internalType":"bool","name":"emergencyWithdraw","type":"bool"},{"internalType":"address","name":"Createduser","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockerCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lockerisExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockers","outputs":[{"internalType":"address","name":"LPAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"unlockOn","type":"uint256"},{"internalType":"bool","name":"istoken","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address","name":"_lpaddress","type":"address"}],"name":"returnValues","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpaddress","type":"address"},{"internalType":"address","name":"createruser","type":"address"},{"internalType":"address","name":"newowner","type":"address"}],"name":"transferLockerOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userPerLockers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"unlockOn","type":"uint256"},{"internalType":"uint256","name":"lockOn","type":"uint256"},{"internalType":"bool","name":"isVested","type":"bool"},{"internalType":"uint256","name":"vestingInterval","type":"uint256"},{"internalType":"uint256","name":"vestingPercent","type":"uint256"},{"internalType":"uint256","name":"actualBalance","type":"uint256"},{"internalType":"uint256","name":"balanceOf","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"},{"internalType":"uint256","name":"initialClaim","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"istoken","type":"bool"},{"internalType":"bool","name":"emergencyWithdraw","type":"bool"},{"internalType":"address","name":"Createduser","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lpaddress","type":"address"},{"internalType":"address","name":"_user","type":"address"}],"name":"withdrawFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}]