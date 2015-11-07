# Message Queues

Authors: Gunnar Marteinsson & Sigurður Már Atlason

Instructions made mainly by @hlysig

Before you start read these documents:
https://cwiki.apache.org/confluence/download/attachments/27822226/Kafka-netdb-06-2011.pdf
http://kafka.apache.org/documentation.html#gettingStarted

##Start by setting up Kafka
We hope for your sake that you are operating a Linux based computer when setting up this project.

Open Terminal.

Download Kafka and unarchive it.
1. ```mkdir ~/kafka-setup```

2. ```cd ~/kafka-setup wget http://www.eu.apache.org/dist/kafka/0.8.2.2/kafka_2.9.1-0.8.2.2.tgz```

3. ```tar xzvf kafka_2.9.1-0.8.2.2.tgz```

We need to start two services for everything to work properly. We need to start a single ZooKeeper node and a single Kafka broker node.
To start ZooKeeper, change directory where you placed Kafka with ```cd ~/kafka-setup/kafka_2.9.1-0.8.2.2``` and run the following command.
```bin/zookeeper-server-start.sh config/zookeeper.properties ```

This will run a single ZooKeeper instance in foreground. Thus, you need to keep that shell running. If you close it, you will shut-down the ZooKeeper instance.

Now let´s start a new shell and start up a single Kafka Broker. Change back to the Kafka directory and execute the following command.
```bin/kafka-server-start.sh config/server.properties```
This will start-up a single Kafka broker in foreground. Keep that terminal open as well.

Now with ZooKeeper and Kafka running we can now create a topic that we can write to. We create that topic with a replication of factor 1 and with a single partition. These parameters are explained in details in the two links above. In the following example below we write an Express middleware that writes details about incoming request details to a topic named requests. Thus we need to create that topic before we can use it.

Open up your terminal and change directory in to the Kafka directory and type in the following command.
```bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic requests ```

