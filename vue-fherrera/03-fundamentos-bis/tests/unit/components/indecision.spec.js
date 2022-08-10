import { shallowMount } from "@vue/test-utils"
import Indecision from "@/components/Indecision"


describe( 'Indecision Component', () => {

	let wrapper
	let clgSpy

	global.fetch = jest.fn( () => Promise.resolve({
		json: () => Promise.resolve({
			answer: 'yes',
			forced: false,
			image: 'https://yesno.wtf/assets/yes/2.gif'
		})
	}) )

	beforeEach(() =>{
		wrapper = shallowMount( Indecision )
		clgSpy = jest.spyOn( console, 'log' )
		jest.clearAllMocks()
	})
	
	test('debe hacer match con el snapshot',() => {
			expect( wrapper.html() ).toMatchSnapshot()
	})

	test('escribir en el input no debe disparar nada (console.log)', async () => {
		const getAnswerSpy = jest.spyOn( wrapper.vm , 'getAnswer' )

		const input =  wrapper.find('input')
		await input.setValue('Hola Mundo')

		expect( clgSpy ).toHaveBeenCalledTimes(1)
		// expect( getAnswerSpy ).toHaveBeenCalledTimes(0)
		expect( getAnswerSpy ).not.toHaveBeenCalled()
	})

	test('escribir el simbolo de "?" debe disparar el fetch', async () => {
		const getAnswerSpy = jest.spyOn( wrapper.vm , 'getAnswer' )

		const input =  wrapper.find('input')
		await input.setValue('Voy a ser feliz?')

		expect( clgSpy ).toHaveBeenCalledTimes(1)
		expect( getAnswerSpy ).toHaveBeenCalled()
	})

	test('pruebas en getAnswer', async () => {
		await wrapper.vm.getAnswer()
		console.log(wrapper.vm.img)
		console.log(wrapper.vm.answer)

		const img = wrapper.find('img')
		expect( img.exists() ).toBeTruthy()
		expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
		expect( wrapper.vm.answer ).toBe('Si')
	})

	test('pruebas en getAnswer - Fallo en el API', async () => {
		fetch.mockImplementationOnce( () => Promise.reject('API is down'))
		
		await wrapper.vm.getAnswer()
		const img = wrapper.find('img')

		expect( img.exists() ).toBeFalsy() 
		expect( wrapper.vm.answer ).toBe('No se pudo cargar del API')
	})


})