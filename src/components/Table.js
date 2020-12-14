import React from 'react';
import {Button, OverlayTrigger, Popover, Table} from 'react-bootstrap'
import Footer from './Footer'
function Tables() {
    return(
        <div>
           <Table striped bordered hover>
  <tbody>
    <tr>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
    </tr>
    <tr>
    <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
    </tr>
    <tr>
    <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
    </tr>
    <tr>
    <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
    </tr>
    <tr>
    <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
      <td>
      <>
            {['top'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
      </td>
    </tr>
  </tbody>
</Table>
<Footer />
        </div>
    )
}

export default Tables