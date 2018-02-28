package com.jeecg.p3.toupiao.entity;

import java.util.Date;
import java.math.BigDecimal;
import org.jeecgframework.p3.core.utils.persistence.Entity;

/**
 * 描述：</b>WxActToupiaoConfig:投票配置<br>
 * @author chao.hua
 * @since：2017年06月22日 17时16分49秒 星期四 
 * @version:1.0
 */
public class WxActToupiaoConfig implements Entity<String> {
	private static final long serialVersionUID = 1L;
	
	
	private String isEnter;
	
	private String pageViewStyle;
	
		return isEnter;
	}
	public void setIsEnter(String isEnter) {
		this.isEnter = isEnter;
	}
	/**
	
	private String checkVoteCount;
	
	public String getCheckVoteCount() {
		return checkVoteCount;
	}
	public void setCheckVoteCount(String checkVoteCount) {
		this.checkVoteCount = checkVoteCount;
	}
	public String getPageViewStyle() {
		return pageViewStyle;
	}
	public void setPageViewStyle(String pageViewStyle) {
		this.pageViewStyle = pageViewStyle;
	}
}
