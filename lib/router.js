Router.configure({
  layoutTemplate: 'form-layout'
})

Router.map(function(){
  //login - home
  this.route('login', {
    path: '/',
    template: 'login'
  });
  this.route('register', {
    path: '/register',
    template: 'register'
  });
});
