// const re = /r(?:ad)?(?:-)?(\d+)?$/;
const re = /^r(?:ad)?(?:-)?(\d+)?$/;
const match = re.exec('rr2');

if (match) {
  console.log('match: ', match)
}
else {
  console.log('no match')
}
