import PropTypes from 'prop-types'
import { Box, Card, Chip, Grid, Stack, Typography } from '@mui/material'
import { RiseOutlined, FallOutlined } from '@ant-design/icons'


const Analytics = ({ title, amount, percentage, isLoss, color, extra, extraMessage }) => {
  return (
    <div>
      <Card
        sx={{ p: 2.5, bgcolor: 'background.neutral' }}
        elevation={0}
        className=' border-opacity-20 border-gray-700 rounded-md border bg-secondary-color'
      >
        <Stack spacing={0.5}>
          <Typography variant='h6' color='textSecondary' className='text-sm'>
            {title}
          </Typography>
          <Grid container alignItems='center'>
            <Grid item>
              <Typography
                variant='h4'
                color='inherit'
                className='text-2xl font-semibold'
              >
                {amount}
              </Typography>
            </Grid>
            {percentage && (
              <Grid item>
                <Chip
                  variant='combined'
                  color={color}
                  className={`rounded-sm ${color}`}
                  icon={
                    <>
                      {!isLoss && (
                        <RiseOutlined
                          style={{ fontSize: '0.75rem', color: 'inherit' }}
                        />
                      )}
                      {isLoss && (
                        <FallOutlined
                          style={{ fontSize: '0.75rem', color: 'inherit' }}
                        />
                      )}
                    </>
                  }
                  label={`${percentage}%`}
                  sx={{ ml: 1.25, pl: 1 }}
                  size='small'
                />
              </Grid>
            )}
          </Grid>
        </Stack>
        <Box sx={{ pt: 2.25 }} className='-mt-2'>
          {!isLoss ? (
            <Typography variant='caption' color='textSecondary'>
              {extraMessage}{' '}
              <Typography
                component='span'
                variant='caption'
                sx={{ color: `${color || 'primary'}.main` }}
              >
                {extra}
              </Typography>{' '}
              this year
            </Typography>
          ) : (
            <Typography variant='caption' color='textSecondary'>
              You lost{' '}
              <Typography
                component='span'
                variant='caption'
                sx={{ color: `${color || 'primary'}.main` }}
              >
                {extra}
              </Typography>{' '}
              this year
            </Typography>
          )}
        </Box>
      </Card>
    </div>
  )
}

export default Analytics

Analytics.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  color: PropTypes.string,
    extra: PropTypes.number,
    extraMessage: PropTypes.string,
}
