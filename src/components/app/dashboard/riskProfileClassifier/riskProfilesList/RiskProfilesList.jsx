import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Files from 'react-files';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import LoadingMask from '../../../../../utils/spinners/loadingMask/LoadingMask';
import * as csv from 'csvtojson';
import { useAppContext } from '../../../../../contexts/AppContext';
import { useStyles } from './riskProfileStyle';

const riskProfile = [];

const RiskProfilesList = () => {
  const { loadingRiskProfiles, setLoadingRiskProfiles } = useAppContext();
  const classes = useStyles();

  return (
    <Grid container className='riskDisciplines'>
      <Grid item xs={12}>
        <Files
          className='files-dropzone'
          accepts={['.csv']}
          multiple={false}
          maxFilesSize={10000000000}
          minFileSize={0}
          clickable={false}
        >
          <LoadingMask show={loadingRiskProfiles} />
          <Paper className={classes.paper}>
            <FormControl component='fieldSet' className={classes.formControl}>
              <div className='filesInstructions dragFiles'>
                Drag risks to score
              </div>
              <div className='filesInstructions dropFiles'>Drop files</div>
              <TextField
                label='Discipline Filter'
                className={classes.textField}
                type='text'
                margin='normal'
                // onChange={e => filterDisciplines(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Search />
                    </InputAdornment>
                  )
                }}
              />
              <FormGroup>
                {riskProfile
                  ? _.map(riskProfile.riskDisciplines, (rd, idx) => {
                      if (!rd.hide) {
                        return (
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={rd.selected}
                                // onChange={() => {
                                //   toggleRiskDiscipline(rd);
                                // }}
                                key={idx}
                                value={rd.name}
                              />
                            }
                            label={rd.name}
                            key={idx}
                          />
                        );
                      }
                    })
                  : ''}
              </FormGroup>
            </FormControl>
          </Paper>
        </Files>
      </Grid>
    </Grid>
  );
};

export default RiskProfilesList;
