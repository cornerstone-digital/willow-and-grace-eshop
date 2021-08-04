import { render } from '@testing-library/react'

import AnnouncementBar from './AnnouncementBar'

describe('AnnoucementBar', () => {
  it('Shows annoucement text when passed', () => {
    const annoucementText = 'Sample announcement'
    const { getByText, getByTestId } = render(<AnnouncementBar text={annoucementText} />)
    expect(getByTestId('announcement-bar')).toBeInTheDocument()
    expect(getByText(annoucementText)).toBeInTheDocument()
  })
})
