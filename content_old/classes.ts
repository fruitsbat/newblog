import type { Enclosure } from "feed/lib/typings";
import { v4 as uuidv4 } from "uuid";

type Image = {
  link: string;
  description: string;
};

type ContentInputData = {
  created: Date;
  updated?: Date;
};

export class Content {
  id: string;
  updated: Date;
  created: Date;
  inFeed: boolean = true;

  constructor(data: ContentInputData) {
    this.id = uuidv4();
    this.created = data.created;
    this.updated = data.updated ? data.updated : data.created;
  }
}

type FeedItemInputData = {
  link: string;
  title: string;
  enclosure?: Enclosure;
  summary?: string;
} & ContentInputData;

export class FeedItem extends Content {
  link: string;
  title: string;
  summary?: string;
  enclosure?: Enclosure;

  constructor(data: FeedItemInputData) {
    super(data as ContentInputData);
    this.link = data.link;
    this.title = data.title;
    this.enclosure = data.enclosure;
    this.summary = data.summary;
  }
}

export class Page extends FeedItem {
  image: Image;
  summary: string;
  constructor(data: { summary: string; image: Image } & FeedItemInputData) {
    super(data as FeedItemInputData);
    this.summary = data.summary;
    this.image = data.image;
  }
}

export class Game extends Content {
  link: string;
  title: string;

  constructor(data: { title: string; link: string } & ContentInputData) {
    super(data as ContentInputData);
    this.link = data.link;
    this.title = data.title;
  }
}

export class Music extends FeedItem {
  coverImage?: Image;
  audioFile: string;

  constructor(
    data: { audioFile: string; coverImage?: Image } & FeedItemInputData
  ) {
    super(data);
    this.audioFile = data.audioFile;
    this.coverImage = data.coverImage;
  }
}

export class Sticker extends FeedItem {
  image: Image;

  constructor(data: { image: Image } & FeedItemInputData) {
    super(data);
    this.image = data.image;
  }
}
