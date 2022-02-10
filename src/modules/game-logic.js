function _rowCombine(row){
    const filteredRow = row.filter(val => val !== 0)
    let newRow = []
    let score = 0

    for(let i=0; i<filteredRow.length; i++){
        if(i === filteredRow.length - 1){
            newRow.push(filteredRow[i])
        } else {
            if(filteredRow[i] === filteredRow[i + 1]){
                score += filteredRow[i] * 2
                newRow.push(filteredRow[i] * 2)
                i++
            } else {
                newRow.push(filteredRow[i])
            }
        }
    }

    while(newRow.length <= 3){
        newRow.push(0)
    }

    return {row: newRow, score}
}

function _shiftMatrix(matrix){
    let shiftScore = 0

    for(let i=0; i<matrix.length; i++){
        const {row, score} = _rowCombine(matrix[i])
        matrix[i] = row
        shiftScore += score
    }

    return {
        score: shiftScore,
        matrix
    }
}

// --- Generate Random Tile ---
export function _generateRandom(boardArray){
    let current = [...boardArray]
    let available = []
    current.forEach((val, i) => {
        if(val === 0) available.push(i)
    })

    if(available.length === 0){
        return false
    }

    const randomIndex = available[Math.floor(available.length * Math.random())]
    current[randomIndex] = 2
    return {
        board: current,
        newIndex: randomIndex
    }
}

// --- Shift Left ---
export function _shiftLeft(boardArray){
    let initialMatrix = [
        boardArray.slice(0, 4),
        boardArray.slice(4, 8),
        boardArray.slice(8, 12),
        boardArray.slice(12, 16),
    ]
    let {matrix, score} = _shiftMatrix(initialMatrix)

    const newBoard = [
        ...matrix[0],
        ...matrix[1],
        ...matrix[2],
        ...matrix[3]
    ]

    return {board: newBoard, score}
}

// --- Shift Right ---
export function _shiftRight(boardArray){
    let initialMatrix = [
        boardArray.slice(0, 4).reverse(),
        boardArray.slice(4, 8).reverse(),
        boardArray.slice(8, 12).reverse(),
        boardArray.slice(12, 16).reverse(),
    ]
    let {matrix, score} = _shiftMatrix(initialMatrix)

    const newBoard = [
        ...matrix[0].reverse(),
        ...matrix[1].reverse(),
        ...matrix[2].reverse(),
        ...matrix[3].reverse()
    ]

    return {board: newBoard, score}
}

// --- Shift Up ---
export function _shiftUp(boardArray){
    let initialMatrix = [
        boardArray.filter((val, i) => i % 4 === 0),
        boardArray.filter((val, i) => i % 4 === 1),
        boardArray.filter((val, i) => i % 4 === 2),
        boardArray.filter((val, i) => i % 4 === 3),
    ]
    let {matrix, score} = _shiftMatrix(initialMatrix)

    let newBoard = []
    for(let i=0; i<4; i++){
        newBoard.push(matrix[0][i])
        newBoard.push(matrix[1][i])
        newBoard.push(matrix[2][i])
        newBoard.push(matrix[3][i])
    }

    return {board: newBoard, score}
}

// --- Shift Down ---
export function _shiftDown(boardArray){
    let initialMatrix = [
        boardArray.filter((val, i) => i % 4 === 0).reverse(),
        boardArray.filter((val, i) => i % 4 === 1).reverse(),
        boardArray.filter((val, i) => i % 4 === 2).reverse(),
        boardArray.filter((val, i) => i % 4 === 3).reverse(),
    ]
    let {matrix, score} = _shiftMatrix(initialMatrix)

    let newBoard = []
    for(let i=0; i<4; i++){
        newBoard.push(matrix[0][3-i])
        newBoard.push(matrix[1][3-i])
        newBoard.push(matrix[2][3-i])
        newBoard.push(matrix[3][3-i])
    }

    return {board: newBoard, score}
}
