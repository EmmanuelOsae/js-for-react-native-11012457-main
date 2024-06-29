// userInfo.js

function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((originalName, index) => ({
        originalName: originalName,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
// const originalNames = ["Ali", "Osae", "Ama"];
// const modifiedNames = ["ALi", "charles", "ama"];
// console.log(createUserProfiles(originalNames, modifiedNames));
// Output: [
//   { originalName: "Ali", modifiedName: "ALI", id: 1 },
//   { originalName: "Osae", modifiedName: "charles", id: 2 },
//   { originalName: "Ali", modifiedName: "ALI", id: 3 }
// ]
