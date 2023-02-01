import { config } from '@config/config';
import { logger } from '@helpers/logger';
import amqplib, { Channel, Connection } from 'amqplib';
import { ILogs } from '@lib/interfaces/logs';

/**
 * @summary  publishes queye message
 * @returns  {Promise<void>} - returned value
 */
export const publishMessage = async (
  routingKey: string,
  message: string
): Promise<void> => {
  try {
    const connection: Connection = await amqplib.connect(config.rabbitMQ.url);
    const channel: Channel = await connection.createChannel();
    const exchange: string = config.rabbitMQ.exchange;
    await channel.assertExchange(exchange, 'direct');

    const logDetails: ILogs = {
      logType: routingKey,
      message: message,
      dateTime: new Date(),
    };

    channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(logDetails))
    );
  } catch (e) {
    logger.info(`[lib/rabbitmq] - ${e.message}`);
  }
};
