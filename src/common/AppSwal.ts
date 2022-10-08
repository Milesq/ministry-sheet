import Swal from 'sweetalert2'
const x = import('../../node_modules/@sweetalert2/theme-dark/dark.min.css')
console.log(x)

export default Swal.mixin({
  confirmButtonColor: 'var(--color-primary)',
})
