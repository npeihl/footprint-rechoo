const html = require('choo/html')

module.exports = (state, prev, send) => {
  const buttonGroup = state.buttonGroup.buttons
  const el = buttonGroup.map(function (button) {
    return html`
<div class="fl mw7 w-50 w-25-ns">
<button id=${button.id} onclick=${onClick} class="db mw4 w-80 ma2" disabled=${state.buttonGroup.disabled}>${button.text}</button>
</div>
`
  })
  return el

  function onClick (e) {
    send('voteService:sendVote', { id: e.target.id }, (err, res) => {
      console.log(arguments)
    })
  }
}
