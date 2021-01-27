
import StyledButton from './css/button';
import GitHubIcon from '@material-ui/icons/GitHub';
const GitHubLink = () => {

  return (
    <StyledButton
      onClick={() => window.open('https://github.com/pierre-aurele-martin/gaia-explorer', '_blank')}
      startIcon={<GitHubIcon />}
    >
      GitHub
    </StyledButton>
  )
}

export default GitHubLink;