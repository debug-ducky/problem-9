const hoc = (inp1, cb) => { 
  return (inp2) => { 
    cb(inp1, inp2) 
  } 
} 

const ans = hoc(23, (i1, i2) => {
  return i1 + i2;
})(46)

console.log(ans)