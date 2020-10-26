// https://juejin.im/entry/6844903498362912775
function Node(element) {
    this.element = element
    this.next = null
}

function LList(){
    this.head = new Node('head')
    this.find = (item) =>{
        let currentNode = this.head
        while (currentNode.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    this.insert = (newElement, item) =>{
        const newNode = new Node(newElement)
        var currentNode = this.find(item)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }

    this.remove = (item) =>{
        const prevNode = this.findPrev(item)
        if(prevNode.next) {
            prevNode.next = prevNode.next.next
        }
    } 
    
    this.findPrev = (item) =>{
        let currentNode = this.head
        while (currentNode.next && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    } 

    this.display = () =>{
        let currentNode = this.head
        while(currentNode.next) {
            console.log(currentNode.next.element)
            currentNode = currentNode.next
        }
    } 
}

const fruits = new LList()
fruits.insert('Apple', 'head')
fruits.insert('Banana', 'Apple')
fruits.insert('Pear', 'Banana')
fruits.display()
fruits.remove('Banana')
console.log('-----------')
fruits.display()