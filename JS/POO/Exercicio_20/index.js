import { Componet } from "./Coponent.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const titulo = new Componet('h1', 'body',{textContent: "ola mundo "})
console.log(titulo)

titulo.render()
titulo.tag = 'h3'


titulo.build().render()

const form = new Form('body')
const label = new Label('Nome:', form,{htmlFor: 'nameInput'})
const input = new Input(form, {id: 'nameInput', name: 'nomae'})
console.log(form)



form.render()
label.render()
form.addChildren(input)
form.addChildren(
    new Componet('br'),
    new Label('Teste data de nascimento', form, {htmlFor: 'birthdayInput'} ),
    new Input(form, {id: "aniverssárioInput", name: "niver", type:'date'})
)