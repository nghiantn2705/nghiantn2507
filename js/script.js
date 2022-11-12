<script>
    const users = document.querySelector('.users');
    const btn = document.querySelector('.btn-login');
    users.onclick = function(){
        btn.classList.toggle('hide');
        users.classList.toggle('expand');
    }
</script>