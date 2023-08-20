function ID() {
    return "_" + Math.random().toString(36).substring(2, 12);
}

// 2 mean for skipping 0. from Math.random
// 12 mean for length of id (actual 10) because 12-2 (2 _> skipping 0.)
console.log(ID());
