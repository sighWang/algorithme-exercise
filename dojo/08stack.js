class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class StackBasedLinkedList {
    constructor() {
        this.top = null
    }
    push(value) {
        const node = new Node(value)
        if(this.top === null) {
            this.top = node
        }
        else{
            node.next = this.top
            this.top = node
        }
    }
    pop() {
        if(this.top === null) {
            return -1
        } else {
            const element = this.top.element
            this.top = this.top.next
            return element
        }
    }
    clear() {
        this.top === null
    }
    display() {
        if(this.top !== null) {
            let tepm = this.top
            while(tepm !== null) {
                console.log(tepm.element)
                tepm = tepm.next
            }
        }
    }
}

exports.CreatedStack = StackBasedLinkedList

const newStack = new StackBasedLinkedList()
newStack.push(1)
newStack.push(2)
newStack.push(3)
// newStack.display()

// 获取元素
let res = 0
console.log('-------获取pop元素------')
while(res !== -1) {
    res = newStack.pop()
    console.log(res)
}