import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(()=> ( {
    title:{
        display:"flex",
        justifyContent: "space-around",
        alignItems:"center",
        backgroundColor: "#cad9e7",
        padding: "10px",
        width:"60%",
        marginTop:"10px",
        marginLeft:"auto",
        marginRight:"auto",
        height:"40px"
        
    },

    titleButton:{
        marginLeft: "20px"
    }

}));

export default useStyles;