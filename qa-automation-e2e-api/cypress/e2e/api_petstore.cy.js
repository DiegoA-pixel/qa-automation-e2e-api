describe('PetStore API - CRUD Usuario', () => {

  const user = {
    username: "diego_test_01",
    firstName: "Diego",
    lastName: "Arevalo",
    email: "diego@test.com",
    password: "123456",
    phone: "0999999999"
  }

  it('Crear usuario', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/user', user)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Buscar usuario', () => {
    cy.request('GET', `https://petstore.swagger.io/v2/user/${user.username}`)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Actualizar usuario', () => {
    cy.request('PUT', `https://petstore.swagger.io/v2/user/${user.username}`, {
      ...user,
      firstName: "Diego Actualizado"
    })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Eliminar usuario', () => {
    cy.request('DELETE', `https://petstore.swagger.io/v2/user/${user.username}`)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

})