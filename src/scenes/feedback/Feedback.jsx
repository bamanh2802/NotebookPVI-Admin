import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { tokens } from '../../theme'

const Feedback = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

  
  
    return(
        <Box m="20px">
            <Header title="Feedback" subtitle="Feedback to Assistant from User"/>
        
            <Accordion sx={{ marginTop: '20px'}}>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} >
                <Typography display="flex" width="100%">
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        width="10%"
                        >
                        BotID
                    </Typography>
                    <Typography
                        sx={{ flex: 1}}
                        variant="h5"

                        >
                        Cách tiếp cận thứ nhất (backend xử lý sẵn) thường được sử dụng nhiều hơn, vì nó giúp giảm tải công việc xử lý dữ liệu ở phía client (frontend), đồng thời cũng đảm bảo tính nhất quán trong việc hiển thị biểu đồ. Tuy nhiên, cách tiếp cận thứ hai (frontend xử lý dữ liệu thô) cũng có thể được sử dụng, đặc biệt khi biểu đồ yêu cầu một số tính toán phức tạp hơn ở phía backend.
                    </Typography>
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography display="flex" width="100%">
                    <Typography
                        color={colors.greenAccent[500]}
                        width="10%"
                        >
                        UserName
                    </Typography>
                    <Typography
                        sx={{ flex: 1}}
                        >
                        Câu trả lời chưa chính xác lắm
                    </Typography>
                </Typography>
                </AccordionDetails>
            </Accordion>
           
           
        
        
        </Box>

    )
}

export default Feedback; 