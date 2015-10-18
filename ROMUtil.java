import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

public class ROMUtil{
  public static void main(String[] args){
    ROMUtil util = new ROMUtil();
    if(args.length == 1){
    util.romToJSArray(args[0]);
    }else{
      System.out.println("Please specify file name.");
    }
  }
  public void romToJSArray(String filePath){
    try{
      FileInputStream in = new FileInputStream(filePath);
      int c = 0;
      ArrayList<Integer> bytes = new ArrayList<Integer>();
      while((c = in.read())!=-1){
        bytes.add(c);
      }
      System.out.println("[");
      for(int i=0;i<bytes.size();i++){
        System.out.print("0x"+Integer.toHexString(bytes.get(i)));
        if(i != bytes.size() -1){
          System.out.print(",");
        }

        if(i %20 == 0 && i!=0){
          System.out.print("\n");
        }
      }
      System.out.println("]");

    }catch(IOException e){
      System.out.println(e.toString());
    }
  }
}