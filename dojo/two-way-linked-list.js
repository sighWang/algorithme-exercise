function Node(element) {
    this.element = element
    this.previous = null
    this.next = null
}

function TWLList(){
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
        newNode.previous = currentNode
        currentNode.next = newNode
    }

    this.remove = (item) =>{
        const currentNode = this.find(item)
        if(currentNode.next) {
            currentNode.previous.next = currentNode.next
            currentNode.next.previous = currentNode.previous
            currentNode.next = null
            currentNode.previous = null
        }
    } 
    
    this.findLast = () =>{
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        return currentNode
    } 

    this.display = () =>{
        let currentNode = this.head
        while(currentNode.next) {
            console.log(`previous:${currentNode.element}`,`current:${currentNode.next.element}`, `next:${currentNode.next.next && currentNode.next.next.element}`)
            currentNode = currentNode.next
        }
    } 

    this.displayRevert = () => {
        let current = this.findLast()
        while(current.previous) {
            console.log(current.element)
            current = current.previous
        }
    }
}

const fruits = new TWLList()

fruits.insert('Apple', 'head')
fruits.insert('Banana', 'Apple')
fruits.insert('Pear', 'Banana')
fruits.displayRevert()
