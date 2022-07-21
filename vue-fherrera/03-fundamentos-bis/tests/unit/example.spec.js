// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe( 'Example Component', () => {

	test('Debe ser mayor a 10', () => {
		//Arregar
		let value = 10;

		//Estimulo
		value = value + 2

		//observar el resultado
		// if( value > 10 ){
		// 	//TODO todo bien
		// }else{
		// 	throw `${ value } no es mayor a 10`
		// }
		expect(value).toBeGreaterThan(10)
	})

})