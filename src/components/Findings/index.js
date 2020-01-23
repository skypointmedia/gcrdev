import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: 100,
        },
        formControl: {
            margin: theme.spacing(0),
            minWidth: 100,
        },
        Select: {
            width: 100,
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <div className={classes.findingContainer}>

            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={allFindings.map(option => option.desc)}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Finding"
                        margin="normal"
                        fullWidth
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Status</InputLabel>
                <Select native defaultValue="" input={<Input id="grouped-native-select" />}>
                    <option value={1}>Resolving</option>
                    <option value={2}>Stable</option>
                    <option value={3}>Worsening</option>
                </Select>
            </FormControl>
        </div>
    );
}

const allFindings = [
    { abbv: 'ACC', desc: 'anterior cortical changes/ cataract', segment: 'Lens' },
    { abbv: 'ACG', desc: 'angle closure glaucoma', segment: 'Lens' },
    { abbv: "AION", desc: 'anterior ischemic optic neuropathy', segment: 'Nerve' },
    { abbv: 'AMD/ ARMD', desc: 'age-related macular degeneration', segment: 'Retina' },
    { abbv: 'BK', desc: 'band keratopathy', segment: 'Cornea' },
    { abbv: 'BRAO', desc: 'branch retinal artery occlusion', segment: 'Retina' },
    { abbv: 'BRVO', desc: 'branch retinal vein occlusion', segment: 'Retina' },
    { abbv: 'CME', desc: 'cystoid macular edema', segment: 'Retina' },
    { abbv: 'CNV', desc: 'choroidal neovascularization', segment: 'Retina' },
    { abbv: 'CNVM', desc: 'choroidal neovascular membrane', segment: 'Retina' },
    { abbv: 'COAG', desc: 'chronic open angle glaucoma', segment: 'Glaucoma' },
    { abbv: 'CRAO', desc: 'central retinal artery occlusion', segment: 'Retina' },
    { abbv: 'CRVO', desc: 'central retinal vein occlusion', segment: 'Retina' },
    { abbv: 'CSCR', desc: 'central serous chorioretinopathy', segment: 'Retina' },
    { abbv: 'CSME', desc: 'clinically significant macular edema (for diabetes)', segment: 'Retina' },
    { abbv: 'CWS', desc: 'cotton wool spot', segment: 'Retina' },
    { abbv: 'DBH', desc: 'dot blot heme (hemorrhage)', segment: 'Cornea' },
    { abbv: 'DF', desc: 'Descemet’s fold', segment: 'Cornea' },
    { abbv: 'ED', desc: 'epithelial defect', segment: 'Cornea' },
    { abbv: 'EKC', desc: 'epidemic keratoconjunctivitis', segment: 'Cornea' },
    { abbv: 'ERM', desc: 'epiretinal membrane', segment: 'Retina' },
    { abbv: 'GCA', desc: 'Giant cell arteritis', segment: 'Nerve' },
    { abbv: 'IK', desc: 'interstitial keratitis', segment: 'Cornea' },
    { abbv: 'ION', desc: 'ischemic optic neuropathy', segment: 'Nerve' },
    { abbv: 'IRMA', desc: 'intraretinal microvascular anomalies', segment: 'Retina' },
    { abbv: 'JOAG', desc: 'juvenile open angle glaucoma', segment: 'Glaucoma' },
    { abbv: 'KC', desc: 'keratoconus', segment: 'Cornea' },
    { abbv: 'KCS', desc: 'keratoconjunctivitis sicca', segment: 'Cornea' },
    { abbv: 'KP', desc: 'keratic precipitate', segment: 'Cornea' },
    { abbv: 'LCA', desc: 'Leber’s congenital amaurosis', segment: 'Nerve' },
    { abbv: 'LHON', desc: 'Leber’s hereditary optic neuropathy', segment: 'Nerve' },
    { abbv: 'MG', desc: 'myasthenia gravis', segment: 'Nerve' },
    { abbv: 'MGD', desc: 'meibomian gland dysfunction', segment: 'Lids' },
    { abbv: 'MGP', desc: 'meibomian gland plugging', segment: 'Lids' },
    { abbv: 'MS', desc: 'multiple sclerosis', segment: 'Nerve' },
    { abbv: 'NAION', desc: 'nonarteritic ischemic optic neuropathy', segment: 'Nerve' },
    { abbv: 'NPDR', desc: 'non-proliferative diabetic retinopathy', segment: 'Retina' },
    { abbv: 'NS', desc: 'nuclear sclerosis', segment: 'Lens' },
    { abbv: 'NTG/LTG', desc: 'normal/low tension glaucoma', segment: 'Glaucoma' },
    { abbv: 'NVD', desc: 'neovascularization of the disc', segment: 'Retina' },
    { abbv: 'NVE', desc: 'neovascularization elsewhere', segment: 'Retina' },
    { abbv: 'NVG', desc: 'neovascular glaucoma', segment: 'Glaucoma' },
    { abbv: 'OHT', desc: 'ocular hypertension', segment: 'Glaucoma' },
    { abbv: 'PBK', desc: 'pseudophakic bullous keratopathy', segment: 'Cornea' },
    { abbv: 'PCC', desc: 'posterior cortical changes', segment: 'Lens' },
    { abbv: 'PCO', desc: 'posterior capsular opacity (post-cataract patients)', segment: 'Lens' },
    { abbv: 'PDR', desc: 'proliferative diabetic retinopathy', segment: 'Retina' },
    { abbv: 'PDT', desc: 'photodynamic therapy', segment: 'Retina' },
    { abbv: 'PEE', desc: 'punctate epithelial erosion', segment: 'Cornea' },
    { abbv: 'PEK', desc: 'punctate epithelial keratopathy/keratitis OR photo-electronic keratoscope (Hofstetter)', segment: 'Cornea' },
    { abbv: 'PION', desc: 'posterior ischemic optic neuropathy', segment: 'Nerve' },
    { abbv: 'PK', desc: 'penetrating keratoplasty', segment: 'Cornea' },
    { abbv: 'POAG', desc: 'primary open angle glaucoma', segment: 'Glaucoma' },
    { abbv: 'OAG', desc: 'open angle glaucoma', segment: 'Glaucoma' },
    { abbv: 'PPA', desc: 'peripapillary atrophy', segment: 'Nerve' },
    { abbv: 'PSC', desc: 'posterior subcapsular cataract', segment: 'Lens' },
    { abbv: 'PVD', desc: 'posterior vitreous detachment', segment: 'Retina' },
    { abbv: 'PXE', desc: 'pseudoxanthoma elasticum', segment: 'Glaucoma' },
    { abbv: 'RD', desc: 'retinal detachment', segment: 'Retina' },
    { abbv: 'RP', desc: 'retinitis pigmentosa', segment: 'Retina' },
    { abbv: 'SLK', desc: 'superior limbic keratoconjunctivitis', segment: 'Cornea' },
    { abbv: 'SOAG', desc: 'secondary open angle glaucoma', segment: 'Glaucoma' },
    { abbv: 'SPK', desc: 'superficial punctate keratopathy/keratitis', segment: 'Cornea' },
    { abbv: 'SRNV', desc: 'subretinal neovascularization', segment: 'Retina' },
    { abbv: 'SRNVM', desc: 'subretinal neovascular membrane', segment: 'Retina' },
    { abbv: 'TON', desc: 'traumatic optic neuropathy', segment: 'Nerve' },
    { abbv: 'TRD', desc: 'tractional detachment', segment: 'Retina' },
    { abbv: 'UGH', desc: 'uveitis glaucoma hyphema syndrome', segment: 'Glaucoma' },
    { abbv: 'VH', desc: 'vitreous hemorrhage', segment: 'Retina' },
    { abbv: 'VMT', desc: 'vitreomacular traction', segment: 'Retina' }
];