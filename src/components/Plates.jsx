
const submit = () => {
    const Verify = ({plate}) => {
        Verify.propTypes = String;
        const p = plate.split('');

        const n = p.filter(a => /[0-9]/.test(a));

        const q = p.filter(a => /[0-9]/.test(a)).concat(p.filter(a => /[a-zA-Z]/.test(a)));

        if (/[a-zA-Z]/.test(plate[0]) === false || /[a-zA-Z]/.test(plate[1]) === false) {
            return <div> invalid </div>
        }
        if (plate.length < 2 || plate.length > 6) {
            return <div>invalid</div>
        }
        if(n[0] === '0'){
            return <div>invalid</div>
        }
        if(q.length !== p.length){
            return <div>invalid</div>
        }
        for(let i = 0; i < p.length - 1; i++){
            console.log(/[0-9]/.test(p[i]));
            console.log(/[a-zA-Z]/.test(p[i+1]));
            console.log('------');
            if(/[0-9]/.test(p[i])===true && /[a-zA-Z]/.test(p[i+1])){
                return <div>invalid</div>
            }
        }
        return <div>valid</div>
    }
    return(
        <div>
            <Verify></Verify>
        </div>
    )
}


export default submit