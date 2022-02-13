import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import getUserMedia from './get-user-media';

@Component({
  selector: 'app-get-user-media',
  templateUrl: './get-user-media.component.html',
  styleUrls: ['./get-user-media.component.css'],
})
export class GetUserMediaComponent implements OnInit {
  @ViewChild('getUserMediaCanvas') canvasElement?: ElementRef;
  @ViewChild('getUserMediaVideo') videoElement?: ElementRef;
  @ViewChild('showUserMedia') imgShowUserMediaElement?: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const canvasElement = this.canvasElement
      ?.nativeElement as HTMLCanvasElement;

    const videoElement = this.videoElement?.nativeElement as HTMLVideoElement;

    const imgShowUserMediaElement = this.imgShowUserMediaElement
      ?.nativeElement as HTMLImageElement;

    if (videoElement && canvasElement) {
      getUserMedia(canvasElement, videoElement, imgShowUserMediaElement);
    }
  }
}
