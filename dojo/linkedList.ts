class LinkedList {
    head: ListNode;

    find(item: any): ListNode {
        let currentNode = this.head
        while(currentNode.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    insert(node: ListNode) {
        if(!this.head) {
            this.head = node
            node.next = null
        } else {
            const target:ListNode = this.find(node)
            node.next = target.next
            target.next = node
        }
    }

    remove() {
        console.log('remove')
    }
}